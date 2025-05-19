import {
  isEmail,
  isEqualToOtherValue,
  isNotEmpty,
  hasMinLength,
} from "../util/validation";
export default function Signup() {
  const signupAction = (formdata) => {
    const Email = formdata.get("email");
    const Password = formdata.get("password");
    const ConfirmPassword = formdata.get("confirm-password");
    const FirstName = formdata.get("first-name");
    const LastName = formdata.get("last-name");
    const Role = formdata.get("role");
    const Terms = formdata.get("terms");
    const Acquisition = formdata.getAll("acquisition");

    const error = [];
    if (!isEmail(Email)) {
      {
        error.push("Email is not valid");
      }
      if (!isNotEmpty(Password) || !hasMinLength(Password, 6)) {
        error.push("Password is not valid");
      }
      if (!isEqualToOtherValue(Password, ConfirmPassword)) {
        error.push("Password and Confirm Password do not match");
      }
      if (!isNotEmpty(FirstName) || !isNotEmpty(LastName)) {
        error.push("Please provide First Name and Last Name");
      }
      if (!isNotEmpty(Role)) {
        error.push("Please select a role");
      }
      if (!isNotEmpty(Terms)) {
        error.push("Please accept the terms and conditions");
      }
      if (Acquisition.length === 0) {
        error.push("Please select at least one acquisition channel");
      }
    }
  };
  return (
    <form action={signupAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
