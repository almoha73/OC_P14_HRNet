import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import logo from "../assets/logo.jpg";
import { useForm } from "react-hook-form";

/**
 * A functional component that displays the login form.
 * @function
 * @returns {JSX.Element} - The Login component to render
 */
export default function Login() {
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	/**
	 * Handles the submit action of the login form.
	 * 
	 * @function
	 * @param {Object} data - The form data submitted by the user.
	 * @returns {void}
	 */
	const onSubmit = async (data) => {
		console.log(data);
		try {
			await signIn(data?.email, data?.password);
			navigate("/private/home");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="w-full h-screen flex items-center justify-center">
				<div className="flex min-h-full flex-col justify-center  py-12 sm:px-6 lg:px-8 w-11/12 ">
					<div className="sm:mx-auto sm:w-full sm:max-w-md">
						<img
							className="mx-auto h-12 w-auto"
							src={logo}
							alt="Your Company"
						/>
						<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
							Sign in to the admin HRnet place
						</h2>
					</div>

					<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
						<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Admin Email address
								</label>
								<div className="mt-1">
									<input
										{...register("email", { required: true })}
										placeholder="Your admin email"
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
									/>
									{errors.email && (
										<span style={{ color: "red" }}>*Email* is mandatory </span>
									)}
								</div>

								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Admin Password
								</label>
								<div className="mt-1">
									<input
										{...register("password", { required: true })}
										placeholder="Your admin password"
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
									/>
									{errors.password && (
										<span style={{ color: "red" }}>
											*Password* is mandatory{" "}
										</span>
									)}
								</div>

								<input
									type="submit"
									className="flex w-full justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-200 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
								/>
							</form>
						</div>
						<p className="text-green-700 text-xs text-center mt-12">
							Try with this login for the test : hrnetadmin@test.fr and azerty
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
