"use client";

import React, { useActionState, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import MDEditor from "@uiw/react-md-editor";
import { toast } from "sonner";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/actions";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);

      const result = await createPitch(prevState, formData, pitch);

      if (result.status === "SUCCESS" && result.data) {
        toast("Success", {
          description: "Startup submitted successfully!",
          className: "bg-green-500 text-white",
        });
        router.push(`/startup/${result.data._id}`);
      } else if (result.status === "ERROR") {
        toast("Error", {
          description: result.error || "Something went wrong",
          className: "bg-red-500 text-white",
        });
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);

        toast("Error", {
          description: "Please check the form for errors.",
          className: "bg-red-500 text-white",
        });

        return { ...prevState, error: "Validation Failed", status: "ERROR" };
      }

      toast("Error", {
        description: "An unexpected error occurred",
        className: "bg-red-500 text-white",
      });

      return {
        ...prevState,
        error: "An unexpected error occurred",
        status: "ERROR",
      };
    } finally {
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          type="text"
          name="title"
          id="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />

        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          name="description"
          id="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />

        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          type="text"
          name="category"
          id="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (Tech, Business, etc.)"
        />

        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          type="text"
          name="link"
          id="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />

        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        {isLoading && (
          <MDEditor
            value={pitch}
            onChange={(value) => setPitch(value as string)}
            id="pitch"
            preview="edit"
            height={300}
            style={{ borderRadius: 20, overflow: "hidden" }}
            textareaProps={{
              placeholder:
                "Briefly describe your idea and what problem it solves.",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />
        )}
        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>

      <Button
        disabled={isPending}
        type="submit"
        className="startup-form_btn text-white"
      >
        {isPending ? "Submitting..." : "Submit Your Pitch"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default StartupForm;
