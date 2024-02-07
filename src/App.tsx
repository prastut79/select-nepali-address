import SelectAddress from "./components/NepalAddress/select-address";

function App() {
	return (
		<div className="w-screen h-screen  flex flex-col justify-between">
			<main className="mx-auto px-4 w-full ">
				<h1 className="text-center my-20 text-primary text-4xl font-bold">
					Select Nepali Address
				</h1>
				<div className="px-8">
					<SelectAddress />
				</div>
			</main>
			<footer>
				<div className="flex w-full justify-between px-4 py-2">
					<a
						className="text-sm "
						href={
							import.meta.env.VITE_SOURCE_CODE ||
							"https://www.github.com/prastut79"
						}
					>
						Source Code:{" "}
						<span className="font-bold ">
							{import.meta.env.VITE_SOURCE_CODE ||
								"https://www.github.com/prastut79"}
						</span>
					</a>
					<p className=" text-xs font-bold ">
						Made with React/ShadcnUi/RadixUi
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
