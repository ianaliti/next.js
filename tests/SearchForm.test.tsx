import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  it("renders input and button", () => {
    render(<SearchForm />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
}); 