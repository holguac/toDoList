import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole("heading");
  expect(linkElement).toBeInTheDocument();
});

test("renders the header", () => {
  render(<App />);
  const headElement = screen.getByRole("heading");
  expect(headElement).toBeInTheDocument();
});

// test("render the submit button", () => {
//   render(<App />);
//   const buttonAsLink = screen.getByRole('link');
//   expect(element).toBeInTheDocument();
// });

// test("render one submit button", () => {
//   render(<App />);
//   const element = screen.getAllByText("submit");
//   expect(element.length).toBe(1);
// });

// test("render one submit button", () => {
//   render(<App />);
//   const element = screen.getAllByText("submit");
//   expect(element.length).toBe(1);
// });

// test("fireEevent submit button", () => {
//   render(<App />);
//   const submitButton = screen.getByText("submit");
//   fireEvent.click(submitButton);
//   const deleteButton = screen.getByText("delete");
//   expect(deleteButton).toBeInTheDocument();
// });

// test("input value is rendered", () => {
//   render(<App />);
//   const inputElement = screen.getByPlaceholderText("add new task");
//   fireEvent.change(inputElement, { target: { value: "get food"} });
//   expect(inputElement.value).toBe("get food");
// });

// test("input value is rendered", () => {
//   render(<App />);
//   const inputElement = screen.getByPlaceholderText("add new task");
//   fireEvent.change(inputElement, { target: { value: ""} });
//   expect(inputElement.value).toBeDefined();
// });
