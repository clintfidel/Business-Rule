import React from "react";
import { Link } from 'react-router-dom'
import backgroundImage from "../../assests/images/bar2_ab-inbev.jpg";
import Logo from "../../assests/images/logo_ab-inbev.jpg";

const Login = () => {
	return (
		<div className="h-screen w-screen flex overflow-hidden">
			<div className="hidden md:block h-full w-1/2">
				<img
					className="h-full w-full"
					src={backgroundImage}
					alt=""
				/>
			</div>
			<div className="h-100 w-full md:w-1/2 lg:w-1/2 overflow-y-scroll">
				<div className="flex justify-start md:justify-end lg:justify-end">
					<img
						className="mx-6 md:mx-10 my-8"
						src={Logo}
						alt="logo"
					/>
				</div>
				<div className="mt-4 md:mt-16 mx-6 md:mx-32 px-0 md:px-8">
					<p className="text-black-400 text-base font-normal font-customRoboto pt-3 pb-2">
						Welcome Back
					</p>
					<p
						className="text-black-400 font-bold pb-5 font-customRoboto"
						style={{ fontSize: "30px" }}
					>
						Login To your Account
					</p>
					<div>
						<form>
							<div class="pt-6 pb-8 mb-4 flex flex-col">
								<div class="mb-4">
									<label
										class="block text-black-400 text-base font-normal font-customRoboto mb-2"
										for="username"
									>
										Username
									</label>
									<input
										class="shadow appearance-none border rounded w-full py-2 px-3 text-black-400"
										id="username"
										type="text"
										placeholder="Username"
									/>
								</div>
								<div class="mb-6">
									<label
										class="block text-black-400 text-base font-normal font-customRoboto mb-2"
										for="password"
									>
										Password
									</label>
									<input
										class="shadow appearance-none border  rounded w-full py-2 px-3 text-black-400 mb-3"
										id="password"
										type="password"
										placeholder="******************"
									/>
								</div>
								<div class="flex items-center justify-between">
									<div>
										<input type="checkbox" id="remember-me" name="remember me" />
										<label className="rounded-full text-black-400 ml-4 text-base font-normal font-customRoboto" for="remember-me">Remember me</label>
									</div>
									<Link
                    to=''
										class="inline-block align-baseline text-base font-normal font-customRoboto" style={{ color: '#2C5282' }}
										href=""
									>
										Forgot Password?
									</Link>
								</div>
								<button className="w-full my-5 py-3 rounded text-white text-center text-base font-bold font-customRoboto" style={{ backgroundColor: '#F7951D' }}>
									Login
                </button>
								<p className=" my-5 text-base font-normal font-customRoboto">
									Don't have an account? <Link className="pl-2" style={{ color: '#2C5282' }} to="/signup">Signup</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
