import { useState } from "react";
import "./App.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    college: "",
    department: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [name]: ""
    });

    setSubmitted(false);
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};

    // 1. First Name
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name should contain only letters";
    }

    // 2. Last Name
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name should contain only letters";
    }

    // 3. Username
    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 4) {
      newErrors.username = "Username must contain at least 4 characters";
    }

    // 4. Email
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // 5. Mobile
    if (formData.mobile.trim() === "") {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must contain exactly 10 digits";
    }

    // 6. Date of Birth
    if (formData.dob === "") {
      newErrors.dob = "Date of birth is required";
    }

    // 7. Gender
    if (formData.gender === "") {
      newErrors.gender = "Please select your gender";
    }

    // 8. Address
    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
    } else if (formData.address.length < 10) {
      newErrors.address = "Address must contain at least 10 characters";
    }

    // 9. City
    if (formData.city.trim() === "") {
      newErrors.city = "City is required";
    }

    // 10. State
    if (formData.state === "") {
      newErrors.state = "Please select a state";
    }

    // 11. Pincode
    if (formData.pincode.trim() === "") {
      newErrors.pincode = "Pincode is required";
    } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must contain exactly 6 digits";
    }

    // 12. Password
    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters";
    } else if (
      !/[A-Z]/.test(formData.password) ||
      !/[a-z]/.test(formData.password) ||
      !/[0-9]/.test(formData.password)
    ) {
      newErrors.password =
        "Password must contain uppercase, lowercase and number";
    }

    // 13. Confirm Password
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // 14. College
    if (formData.college.trim() === "") {
      newErrors.college = "College name is required";
    }

    // 15. Department
    if (formData.department === "") {
      newErrors.department = "Please select your department";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);

      console.log("Form Data:", formData);
    } else {
      setSubmitted(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      mobile: "",
      dob: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      password: "",
      confirmPassword: "",
      college: "",
      department: ""
    });

    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="page">
      <div className="form-container">

        <h1>Student Registration Form</h1>
        <p className="subtitle">
          Please fill in all the details correctly
        </p>

        {submitted && (
          <div className="success-message">
            ✓ Registration successful!
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* 1. First Name */}
          <div className="form-group">
            <label>1. First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </div>

          {/* 2. Last Name */}
          <div className="form-group">
            <label>2. Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>

          {/* 3. Username */}
          <div className="form-group">
            <label>3. Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>

          {/* 4. Email */}
          <div className="form-group">
            <label>4. Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>

          {/* 5. Mobile */}
          <div className="form-group">
            <label>5. Mobile Number</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter 10 digit mobile number"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <span className="error">{errors.mobile}</span>
            )}
          </div>

          {/* 6. Date of Birth */}
          <div className="form-group">
            <label>6. Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && (
              <span className="error">{errors.dob}</span>
            )}
          </div>

          {/* 7. Gender */}
          <div className="form-group">
            <label>7. Gender</label>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>

            {errors.gender && (
              <span className="error">{errors.gender}</span>
            )}
          </div>

          {/* 8. Address */}
          <div className="form-group">
            <label>8. Address</label>
            <textarea
              name="address"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
            ></textarea>

            {errors.address && (
              <span className="error">{errors.address}</span>
            )}
          </div>

          {/* 9. City */}
          <div className="form-group">
            <label>9. City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
            />

            {errors.city && (
              <span className="error">{errors.city}</span>
            )}
          </div>

          {/* 10. State */}
          <div className="form-group">
            <label>10. State</label>

            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">-- Select State --</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Kerala">Kerala</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Other">Other</option>
            </select>

            {errors.state && (
              <span className="error">{errors.state}</span>
            )}
          </div>

          {/* 11. Pincode */}
          <div className="form-group">
            <label>11. Pincode</label>
            <input
              type="text"
              name="pincode"
              placeholder="Enter 6 digit pincode"
              value={formData.pincode}
              onChange={handleChange}
            />

            {errors.pincode && (
              <span className="error">{errors.pincode}</span>
            )}
          </div>

          {/* 12. Password */}
          <div className="form-group">
            <label>12. Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />

            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          {/* 13. Confirm Password */}
          <div className="form-group">
            <label>13. Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            {errors.confirmPassword && (
              <span className="error">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {/* 14. College */}
          <div className="form-group">
            <label>14. College Name</label>
            <input
              type="text"
              name="college"
              placeholder="Enter your college name"
              value={formData.college}
              onChange={handleChange}
            />

            {errors.college && (
              <span className="error">{errors.college}</span>
            )}
          </div>

          {/* 15. Department */}
          <div className="form-group">
            <label>15. Department</label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">-- Select Department --</option>
              <option value="CSE">
                Computer Science and Engineering
              </option>
              <option value="ECE">
                Electronics and Communication Engineering
              </option>
              <option value="EEE">
                Electrical and Electronics Engineering
              </option>
              <option value="MECH">
                Mechanical Engineering
              </option>
              <option value="CIVIL">
                Civil Engineering
              </option>
              <option value="IT">
                Information Technology
              </option>
            </select>

            {errors.department && (
              <span className="error">{errors.department}</span>
            )}
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" className="submit-btn">
              Register
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Form;
