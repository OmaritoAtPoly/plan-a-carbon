/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from "@testing-library/react";
import { Home } from "./components/Home";

test("App renders", () => {
  render(<Home chartValues={[]} onSelectChange={() => { }} options={[]} />);

  const image = screen.getByRole("img", {
    name: "Plan A"
  });

  expect(image).toBeInTheDocument();
});
