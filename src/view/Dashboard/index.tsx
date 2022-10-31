import React from "react";
import Button from "../../components/Button";
import "./style.scss";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="left">
        <div className="left-menu">
          <p>Profile</p>
          <p>Orders</p>
          <p>Settings</p> <p>Profile</p>
          <p>Orders</p>
          <p>Settings</p>
          <Button className="sec" title="Log Out" />
        </div>
      </div>
      <div className="right">
        <div className="profile-banner">
          <div className="content">
            <img
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg"
              alt="profile"
            />
            <div className="user-info">
              <p>Chukwuemeka Chemazu</p>
              <p>GWQUSEH1</p>
            </div>
            <div className="rating">
              <p>User tier</p>
              <p>Stars</p>
            </div>
          </div>
        </div>
        <div className="profile-details">
          {/* <div className="personal-info">
        Personal Information
FULL NAME

Darian Rolfson
PHONE NUMBER

494-278-0946
EMAIL ADDRESS

Maverick.Hyatt83@gmail.com
BVN

815809412
GENDER

Male
MARITAL STATUS

Single
CHILDREN

None
TYPE OF RESIDENCE

Parent’s Apartment
        </div> */}
          <div className="personal">
            <div className="top">
              <h4>Personal Information</h4>
            </div>
            <div className="bottom">
              <div className="edu-item">
                <p>Full Name</p>
                <h4>Darian Rolfson</h4>
              </div>
              <div className="edu-item">
                <p>Phone Number</p>
                <h4>494-278-0946</h4>
              </div>
              <div className="edu-item">
                <p>Email Address</p>
                <h4>Maverick.Hyatt83@gmail.com</h4>
              </div>
              <div className="edu-item">
                <p>TWITTER</p>
                <h4> @lendsqr</h4>
              </div>
              <div className="edu-item">
                <p> FACEBOOK </p>
                <h4> @lendsqr</h4>
              </div>
              <div className="edu-item">
                <p>INSTAGRAM</p>
                <h4> @lendsqr</h4>
              </div>
            </div>
          </div>
          <div className="personal address">
            <div className="top">
              <h4>Address</h4>
            </div>
            <div className="bottom">
              <div className="edu-item">
                <p>Full Name</p>
                <h4>Darian Rolfson</h4>
              </div>
              <div className="edu-item">
                <p>Phone Number</p>
                <h4>494-278-0946</h4>
              </div>
              <div className="edu-item">
                <p>Email Address</p>
                <h4>Maverick.Hyatt83@gmail.com</h4>
              </div>
              <div className="edu-item">
                <p>TWITTER</p>
                <h4> @lendsqr</h4>
              </div>
              <div className="edu-item">
                <p> FACEBOOK </p>
                <h4> @lendsqr</h4>
              </div>
              <div className="edu-item">
                <p>INSTAGRAM</p>
                <h4> @lendsqr</h4>
              </div>
            </div>
          </div>
          <div className="personal address">
            <div className="top">
              <h4>Payment</h4>
            </div>
            <div className="bottom">
              <div className="edu-item">
                <p>Full Name</p>
                <h4>Darian Rolfson</h4>
              </div>
              <div className="edu-item">
                <p>Phone Number</p>
                <h4>494-278-0946</h4>
              </div>
              <div className="edu-item">
                <p>Email Address</p>
                <h4>Maverick.Hyatt83@gmail.com</h4>
              </div>
              <div className="edu-item">
                <p>TWITTER</p>
                <h4> @lendsqr</h4>
              </div>
              <div className="edu-item">
                <p> FACEBOOK </p>
                <h4> @lendsqr</h4>
              </div>
              <div className="edu-item">
                <p>INSTAGRAM</p>
                <h4> @lendsqr</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
let MenuItem = () => {
  return (
    <div className="menu-item">
      <img />
      <p>Profile</p>
    </div>
  );
};
