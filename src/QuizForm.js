import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const QuizForm = (props) => {

  let categories = [
    "General Knowledge",
    "Books",
    "Film",
    "Music",
    "Music & Theatres",
    "Television",
    "Video Games",
    "Board Games",
    "Science & Nature",
    "Computers",
    "Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Comics",
    "Gadgets",
    // "Gadgets",
    "Japanese Anime & Manga",
    "Cartoon & Animation",
  ]

  let showCategories = categories.map((item, index) => {
    let value = index + 9
    return(
      <option value={value}>{item}</option>
    )
  })

  let amounts = [];
  for (let i = 1; i <= 50; i++) {
    amounts.push(i)
  }

  let showAmounts = amounts.map((item) => {
    return(
      <option value={item}>{item}</option>
    )
  })

  return (
    <Form className="text-white">
      <FormGroup >
        <Label for="exampleEmail">Number of Questions</Label>
        <Input onChange={(e) => props.setAmount(e.target.value)} type="select" name="select" id="exampleSelect">
          {showAmounts}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select Category:</Label>
        <Input onChange={(e) => props.setCategory(e.target.value)} type="select" name="select" id="exampleSelect">
          <option value="0">Any Category</option>
          {showCategories}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select Difficulty:</Label>
        <Input onChange={(e) => props.setDifficulty(e.target.value)} type="select" name="select" id="exampleSelect">
        <option value="0">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select Type:</Label>
        <Input onChange={(e) => props.setType(e.target.value)} type="select" name="select" id="exampleSelect">
          <option value="0">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
          
        </Input>
      </FormGroup>
      <Button className="float-right" size="sm" color="warning" onClick={props.getQuestions}>Play</Button>
    </Form>
  );
}

export default QuizForm;