import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import Article from '..components/Article';
import React from "react"


test('displays the test "please pass this test"', () => {
  render(<Article/>);

  screen.debug();
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
export default Article;