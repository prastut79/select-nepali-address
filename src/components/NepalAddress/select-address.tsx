import ADDRESS_DATA from "@/data/nepal-full-address.json";
import * as React from "react";
import { SelectProvince } from "./select-province";

import { Input } from "../ui/input";
import { SelectDistrict } from "./select-district";
import { SelectMunicipality } from "./select-municipality";
import { Label } from "../ui/label";

export default function SelectAddress() {
	const [data, setData] = React.useState<{
		province?: string;
		district?: string;
		municipality?: string;
		ward?: string;
	}>();

	return (
		<div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				<SelectProvince
					data={ADDRESS_DATA.provinceList}
					value={data?.province}
					onValueChange={(province) => setData({ province })}
				/>

				{/* {data?.province && ( */}
				<SelectDistrict
					data={
						ADDRESS_DATA.provinceList.find(
							(province) => province.name === data?.province
						)?.districtList
					}
					onValueChange={(district) =>
						setData((prev) => ({
							province: prev?.province,
							district,
						}))
					}
					value={data?.district || ""}
					disabled={!data?.province}
				/>
				{/* )} */}

				<SelectMunicipality
					data={
						ADDRESS_DATA.provinceList
							.find((prov) => prov.name === data?.province)
							?.districtList?.find(
								(dis) => dis.name === data?.district
							)?.municipalityList!
					}
					onValueChange={(municipality) =>
						setData((prev) => ({
							province: prev?.province,
							district: prev?.district,
							municipality,
						}))
					}
					value={data?.municipality || ""}
					disabled={!data?.district}
				/>
				<div className="space-y-1">
					<Label htmlFor="ward">Ward No.</Label>
					<Input
						id="ward"
						placeholder="no."
						min={1}
						max={50}
						type="number"
						disabled={!data?.municipality}
						value={data?.ward || ""}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								ward: e.target.value,
							}))
						}
					/>
				</div>
			</div>
			{Object.keys(data || {}).length === 4 && (
				<p className="text-center text-xl font-bold py-12 ">{`${data?.municipality} - ${data?.ward}, ${data?.district}, ${data?.province}, Nepal `}</p>
			)}
		</div>
	);
}
