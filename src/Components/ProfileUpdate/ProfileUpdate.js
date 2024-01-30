import React from "react";
import "./ProfileUpdate.scss";
export default function ProfileUpdate() {
  return (
    <div className="profile-update">
      <p className="head">Patient profile</p>
      <div className="profile-feilds">
        {/* <div className="horizontal-feilds">
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              Username
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
        </div> */}
        <div className="horizontal-feilds">
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              First name
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              Middle name
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
        </div>
        <div className="horizontal-feilds">
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              Last name
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              Gender
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
        </div>
        <div className="horizontal-feilds">
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              Email
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              Mobile Number
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
        </div>
        <div className="horizontal-feilds">
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              Address Line 1
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              Address Line 2
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
        </div>
        <div className="horizontal-feilds">
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              Street/Landmark
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              City
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
        </div>
        <div className="horizontal-feilds">
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              State
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
          <div className="input-f">
            <label className="input-head" htmlFor="username">
              Postal code
            </label>
            <input type="text" className="logininput" id="username" />
          </div>
        </div>
      </div>
      <div className="update-buttons">
        <button className="buttons">Update</button>
      </div>
    </div>
  );
}
