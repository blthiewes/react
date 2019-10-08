import React from "react";
import ReactDOM from "react-dom";
import AuthorQuiz from "./AuthorQuiz";
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: ["A Christmas Carol", "It", "The Shining", "s"],
    author: {
      name: "Charles Dickens",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/200px-Dickens_Gurney_head.jpg",
      imageSource: "Wikimedia Commons",
      books: ["A Christmas Carol", "David Copperfield ", "Oliver Twist"]
    }
  },
  highlight: "none"
};

describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => {}} />, div);
  });

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => {}} />);
    });
    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        ""
      );
    });
  });

  describe("When wrong answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      state.highlight = 'wrong';
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => {}} />);
    });
    it("should have red background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        "red"
      );
    });
  });

  describe("When correct answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      state.highlight = 'correct';
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => {}} />);
    });
    it("should have green background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        "green"
      );
    });
  });

  describe('When the first answer is selected', () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();
    beforeAll(() => {
      state.highlight = 'wrong';
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />);
      wrapper.find('.answer').first().simulate('click');
    });

    it('should call onAnswerSelected', () => {
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it('should receive A Christmas Carol', () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith("A Christmas Carol")
    });
  });
});
