import SelectAddress from "./components/NepalAddress/select-address";

const SOURCE_CODE = "https://github.com/prastut79/select-nepali-address";

function App() {
	return (
		<div className="w-screen h-screen  flex flex-col justify-between max-w-[1920px] mx-auto">
			<main className="mx-auto w-full px-4">
				<h1 className="text-center my-16 text-primary text-4xl font-bold">
					Select Nepali Address
				</h1>
				<div className="max-w-7xl mx-auto">
					<SelectAddress />
				</div>
			</main>
			<footer>
				<div className="flex flex-wrap gap-4 w-full justify-between px-4 py-2">
					<a
						className="text-sm "
						target="__blank"
						href={import.meta.env.VITE_SOURCE_CODE || SOURCE_CODE}
					>
						Source Code:{" "}
						<span className="font-bold ">
							{import.meta.env.VITE_SOURCE_CODE || SOURCE_CODE}
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
