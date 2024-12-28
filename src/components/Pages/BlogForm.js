import React from "react";
import "./BlogForm.css";

const FormPage = () => {
  return (
    <div className="form-page">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Form Container */}
      <div className="container">
        <form id="p1">
          <h2>Guidelines</h2>
          <p className="guidelines" style={{paddingBottom: '20px'}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            quasi quaerat placeat excepturi explicabo fugiat dolore voluptates
            earum, voluptas nostrum iusto ut officia consequuntur iure quo
            vitae veritatis obcaecati ullam!<br/>
            Once submitted will be reviewed and then mail will be sent about the approval.
          </p>

          <label htmlFor="name">Name: <div className="required">*</div></label>
          <input type="text" placeholder="Enter your name" required />

          <label htmlFor="year">Year: <div className="required">*</div></label>
          <input type="text" placeholder="Enter your year" required />

          <label htmlFor="degree">Degree: <div className="required">*</div></label>
          <input type="text" placeholder="Enter your degree" required />

          <label htmlFor="university">University: <div className="required"> *</div></label>
          <input type="text" placeholder="Enter your university" required />

          <label htmlFor="shortBio">Short Bio: <div className="required">*</div></label>
          <textarea name="shortBio" placeholder="Write a short bio..." required></textarea>

          <label htmlFor="category">Select Category: <div className="required">*</div></label>
          <select name="category">
            <option value="" disabled selected>Select category...</option>
            <option value="Constitution law">Constitution law</option>
            <option value="Constitution of India">Constitution of India</option>
            <option value="The Code of Civil Procedure 1908">The Code of Civil Procedure 1908 </option>
            <option value="Administrative Law">Administrative Law</option>
            <option value="The Law of Contracts">The Law of Contracts</option>
            <option value="BNSS 2023 - Bharatiya Nagrik Suraksha Sanhita 2023"> BNSS 2023 - Bharatiya Nagrik Suraksha Sanhita 2023 </option>
            <option value="The Law of Evidence, Evidence Act"> The Law of Evidence, Evidence Act </option>
            <option value="Law of Torts">Law of Torts</option>
            <option value="Election Laws">Election Laws</option>
            <option value="Human Rights">Human Rights</option>
            <option value="Human Rights">Other Category</option>
          </select>

          <label htmlFor="blog">Write Your Blog:<div className="required">*</div></label>
          <textarea className="blog" name="blog" placeholder="Write your blog here..." required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
