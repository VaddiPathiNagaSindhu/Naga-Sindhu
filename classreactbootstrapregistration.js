import React from "react";
import {Component } from 'react';
class Registration extends React.Component{
render(){
    return(
        <div>
            <form>
                <fieldset>
                    <legend>Registration Form</legend>
            <div class="row1">
                <div class="col1">
                    <label for="exampleFormControlInput1" class="form-label">First Name:</label>
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div class="col2">
                    <label for="exampleFormControlInput1" class="form-label">Last Name:</label>
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
                <div class="col3">
                    <label for="exampleFormControlInput1" class="form-label">Father Name:</label>
                    <input type="text" class="form-control" placeholder="Father name" aria-label="Last name" />
                </div>
                <div class="col4">
                    <label for="exampleFormControlInput1" class="form-label">Mother Name:</label>
                    <input type="text" class="form-control" placeholder="Mother name" aria-label="Last name" />
                </div>
                <div class="col5">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
                    <input type="email" class="form-control" id="inputEmail3" placeholder="email" />
                </div>
                <div class="col6">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>
                    <input type="password" class="form-control" id="inputPassword3" placeholder="password" />
                </div>
                <div class="col7">
                    <label>Gender</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Female
                    </label>
                 </div>
                 </div>
                 <label>College:</label>
                 <select class="form-select" aria-label="Default select example">
                    <option selected>select your college</option>
                    <option value="1">AITS-Rajampet</option>
                    <option value="2">AITS-Kadapa</option>
                    <option value="3">AITS-Tirupati</option>
                    <option value="4">AITS-Hyderabad</option>
                    <option value="5">RGM</option>
                    <option value="6">MBU</option>
                    <option value="3">SVU</option>
                    </select>
                <div class="col8">
                <label>Branch:</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>select your Branch</option>
                    <option value="1">CSE</option>
                    <option value="2">ECE</option>
                    <option value="3">EEE</option>
                    <option value="4">AIDS</option>
                    <option value="5">AIML</option>
                    <option value="6">CIVIL</option>
                    <option value="3">MECH</option>
                    </select>
                    </div>
            <label>Date of join</label>
            <input type="date" id="date" placeholde="Date"/><br/>
            <label>Year:</label>
            <input type="year" id="year" placeholder="Year"/><br/>
            <label>End date:</label>
            <input type="date" id="date" placeholder="Date"/><br/>
            <label>Mobile no:</label>
            <input type="text" id="text" placeholder="Mobile no"/><br/><br/>
            <div class="col">
                <label for="exampleFormControlTextarea1" class="form-label">Address:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Address"></textarea>
            </div>
            <input class="btn btn-primary" type="submit" value="Submit"/>
            <input class="btn btn-primary" type="reset" value="Reset"></input>                    
         </div>
        </fieldset>
        </form>
        </div>
        );
        }
    }
    export default Registration;