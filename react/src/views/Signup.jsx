import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios.js'

export default function Signup() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
	const [error, setError] = useState({__html: ''});

	const onSubmit = (ev) => {
		ev.preventDefault();
		setError({__html: ''})

		axiosClient.post('/signup', {
			name,
			email,
			password,
			password_confirmation: passwordConfirmation
		})

		.then(({data}) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
			if(error.response){
				const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
				console.log(finalErrors)
				setError({__html: finalErrors.join('<br>')})
			}
			console.log(error);
		});
	}

  return (
    <>
		<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
			Cadastrar
		</h2>
		<p className="mt-2 text-center text-sm text-gray-600">
			Ou{' '}
			<Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
			entre na sua conta
			</Link>
		</p>

		{error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}></div>)}		

		<form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
			<input type="hidden" name="remember" defaultValue="true" />
			<div className="-space-y-px rounded-md shadow-sm">
				<div className="pb-3">
					<label htmlFor="full-name" className="sr-only">
						Nome completo
					</label>
					<input
						id="full-name"
						name="name"
						type="text"
						required
						value={name}
						onChange={ev => setName(ev.target.value)}
						className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Nome completo"
					/>
				</div>
				<div className="pb-3">
					<label htmlFor="email" className="sr-only">
						Email
					</label>
					<input
						id="email"
						name="email"
						type="text"
						required
						value={email}
						onChange={ev => setEmail(ev.target.value)}
						className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Email"
					/>
				</div>
				<div className="pb-3">
					<label htmlFor="password" className="sr-only">
						Senha
					</label>
					<input
						id="password"
						name="password"
						type="password"
						autoComplete="current-password"
						required
						value={password}
						onChange={ev => setPassword(ev.target.value)}
						className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Senha"
					/>
				</div>
				<div>
					<label htmlFor="password-confirmation" className="sr-only">
						Confirme sua senha
					</label>
					<input
						id="password-confirmation"
						name="password_confirmation"
						type="password"
						required
						value={passwordConfirmation}
						onChange={ev => setPasswordConfirmation(ev.target.value)}
						className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Confirme sua senha"
					/>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center">
				<input
					id="remember-me"
					name="remember-me"
					type="checkbox"
					className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
				/>
				<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
					Lembrar
				</label>
				</div>

				<div className="text-sm">
				<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
					Esqueceu sua senha?
				</a>
				</div>
			</div>

			<div>
				<button
				type="submit"
				className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
				<span className="absolute inset-y-0 left-0 flex items-center pl-3">
					<LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
				</span>
				Cadastrar
				</button>
			</div>
		</form>
    </>
  )
}
