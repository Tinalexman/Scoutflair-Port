"use client"

import React, { useEffect, useState } from "react";
import Scoutflairlogo from "@/public/icons/Scoutflairlogo.svg";
import signUpImage from "@/public/images/View-of-3d-school-desk.png"
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { SignUpValidationSchema } from "../../../schemas/Schema";
import { useAxios } from "../../../api/base";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Urls } from "../../../constants/constants";

const CoachSignUp: React.FC = () => {
    const { requestApi } = useAxios();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const navigate = useNavigate();
    const [teams, setTeams] = useState<[]>([])

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await requestApi('/api/v1/est/namesList', 'GET');
                setTeams(response.data)
            }
            catch (error: any) {
                console.error("Submission error:", error.response.data);
                alert("An error occurred during submission. Please try again.");
            }
        }
        fetchTeams()
    })

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        position: "",
        dob: "",
        licenceNumber: "",
        experience: "",
        currentTeam: "",
        email: "",
        password: "",
        confirmPassword: "",
        preferredFoot: "",
        usertype: { type }
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        setSubmitting(true)
        console.log("Submission Block", values);
        const newValues = {
            ...values,
            fullName: values.firstName + " " + values.lastName
        }
        try {
            const response = await requestApi('/scoutflair/v1/signup', 'POST', newValues);
            console.log(response.data);

            if (response.status) {  
                navigate("/signup/success", { replace: true })
            } else {
                Swal.fire({
                    title: "Oops...",
                    text: `${response.data.response.data}`,
                    icon: "error"
                });
            }
        } catch (error: any) {
            console.error("Submission error:", error.response.data);
            alert("An error occurred during submission. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full min-h-screen bg-[#041931] flex flex-col md:flex-row">
            <div className="xs:hidden h-full md:block w-full md:w-1/2 flex justify-center items-center max-h-screen bg-[#041931] p-4 md:p-0">
                <div className="text-white text-center md:text-left p-10 pb-0">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                        Unlock Your Football Potentials With Scoutflair
                    </h1>
                    <Link to={Urls.HOME} className="flex items-center justify-center md:justify-start gap-4">
                        <Image className="w-8 h-8" src={Scoutflairlogo} alt="" />
                        <span className="text-xl font-bold">Scout</span>
                        <span className="text-xl">Flair</span>
                    </Link>
                </div>
                <div className="flex z-20 h-fit overflow-hidden">
                    <Image
                        src={signUpImage}
                        className="w-[720px]"
                        alt=""
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex justify-center items-center bg-[#f8f8ff] p-4 md:p-8 overflow-auto">
                <div className="w-full max-w-md md:max-w-lg bg-white rounded-lg p-6 shadow-md">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold">Create Account</h2>
                        <p className="text-sm text-gray-600">Please enter your details</p>
                    </div>
                    <Formik
                        initialValues={formData}
                        validationSchema={SignUpValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <Field
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.firstName && touched.firstName ? (
                                        <div><p style={{ color: "red" }}>{errors.firstName}</p></div>
                                    ) : null}
                                    <Field
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.lastName && touched.lastName ? (
                                        <div><p style={{ color: "red" }}>{errors.lastName}</p></div>
                                    ) : null}
                                </div>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <Field
                                        type="number"
                                        placeholder="Coaching Experience"
                                        name="experience"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.experience && touched.experience ? (
                                        <div><p style={{ color: "red" }}>{errors.experience}</p></div>
                                    ) : null}
                                    <Field
                                        type="date"
                                        placeholder="Date of Birth"
                                        name="dob"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.dob && touched.dob ? (
                                        <div><p style={{ color: "red" }}>{errors.dob}</p></div>
                                    ) : null}
                                </div>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <Field
                                        type="text"
                                        placeholder="Coaching Licence Number"
                                        name="licencenumber"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.licenceNumber && touched.licenceNumber ? (
                                        <div><p style={{ color: "red" }}>{errors.licenceNumber}</p></div>
                                    ) : null}
                                    <Field
                                        as="select"
                                        placeholder="Current Team"
                                        name="currentTeam"
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="" label="Select a team" />
                                        {teams.map((team: any) => (
                                            <option key={team.indexOf()} value={team}>
                                                {team}
                                            </option>
                                        ))}
                                    </Field>
                                    {errors.currentTeam && touched.currentTeam ? (
                                        <div><p style={{ color: "red" }}>{errors.currentTeam}</p></div>
                                    ) : null}
                                </div>
                                <Field
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {errors.email && touched.email ? (
                                    <div><p style={{ color: "red" }}>{errors.email}</p></div>
                                ) : null}
                                <Field
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {errors.password && touched.password ? (
                                    <div><p style={{ color: "red" }}>{errors.password}</p></div>
                                ) : null}
                                <Field
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="cofirmPassword"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div><p style={{ color: "red" }}>{errors.confirmPassword}</p></div>
                                ) : null}
                                <div className="flex items-center space-x-2">
                                    <Field type="checkbox" className="form-checkbox" />
                                    <label className="text-gray-700 text-sm">
                                        By creating an account, you are agreeing to our <span className="font-bold italic">Terms of Service</span> and <span className="font-bold italic">Privacy Policy</span>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-[#f2a725] text-black font-bold rounded-md hover:bg-yellow-500 transition"
                                // disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Sign Up'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <div className="text-center my-4">
                        <p className="text-gray-600 font-bold">Or</p>
                    </div>
                    <div className="space-y-2">
                        <button className="w-full py-2 border border-black rounded-md flex items-center justify-center space-x-2">
                            <span>Sign up with Google</span>
                        </button>
                        <button className="w-full py-2 border border-black rounded-md flex items-center justify-center space-x-2">
                            <span>Sign up with Apple</span>
                        </button>
                        <button className="w-full py-2 border border-black rounded-md flex items-center justify-center space-x-2">
                            <span>Sign up with Facebook</span>
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-gray-700">Already have an account?
                            <Link to={Urls.LOGIN}>
                                <span className="font-bold text-[#010e1d]"> Sign In</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default CoachSignUp;
