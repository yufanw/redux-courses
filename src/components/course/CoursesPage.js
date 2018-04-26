import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({
      course: course
    });
  }

  onClickSave(e) {
    const course = this.state.course;
    course.title = '';
    this.setState({
      course: course
    });
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <input 
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input 
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

export default CoursesPage;
