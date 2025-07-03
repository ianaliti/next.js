import React from "react";
import { render, screen } from "@testing-library/react";
import SearchFormReset from "../components/SearchFormReset";

describe("SearchFormReset", () => {
  it("renders a button", () => {
    render(<SearchFormReset />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
}); 