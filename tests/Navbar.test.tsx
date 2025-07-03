import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

// Mock the async auth function used in Navbar
jest.mock("../auth", () => ({
  auth: jest.fn().mockResolvedValue({
    user: { name: "Test User", image: "", email: "test@example.com" },
    id: "123",
  }),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

describe("Navbar", () => {
  it("renders Logout button when user is authenticated", async () => {
    // Navbar is an async component, so we need to await the render
    render(await Navbar());
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
}); 