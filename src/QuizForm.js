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
    "Gadgets",
    "Japanese Anime & Manga",
    "Cartoon & Animation",
  ]

  let showCategories = categories.map((item, index) => {
    let value = index + 9
    return(
      <option value={value}>{item}</option>
    )
  })
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Number of Questions</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select Category:</Label>
        <Input onChange={(e) => props.setCategory(e.target.value)} type="select" name="select" id="exampleSelect">
          <option value="0">Any</option>
          {showCategories}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select Difficulty:</Label>
        <Input onChange={(e) => props.setDifficulty(e.target.value)} type="select" name="select" id="exampleSelect">
          <option value="0">Any</option>
          {showCategories}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select Type:</Label>
        <Input onChange={(e) => props.setType(e.target.value)} type="select" name="select" id="exampleSelect">
          <option value="0">Any</option>
          {showCategories}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button onClick={props.getQuestions}>Submit</Button>
    </Form>
  );
}

export default QuizForm;