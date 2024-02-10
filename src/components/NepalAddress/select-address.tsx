import ADDRESS_DATA from "@/data/nepal-full-address.json";
import * as React from "react";
import { SelectProvince } from "./select-province";

import { Input } from "../ui/input";
import { SelectDistrict } from "./select-district";
import { SelectMunicipality } from "./select-municipality";
import { Label } from "../ui/label";
import { SelectWard } from "./select-ward";

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
					data={ADDRESS_DATA.province_list}
					value={data?.province}
					onValueChange={(province) => setData({ province })}
				/>

				{/* {data?.province && ( */}
				<SelectDistrict
					data={
						ADDRESS_DATA.province_list.find(
							(province) => province.name === data?.province
						)?.district_list
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
						ADDRESS_DATA.province_list
							.find((prov) => prov.name === data?.province)
							?.district_list?.find(
								(dis) => dis.name === data?.district
							)?.municipality_list!
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
				<SelectWard
					wards={
						ADDRESS_DATA.province_list
							.find((prov) => prov.name === data?.province)
							?.district_list?.find(
								(dis) => dis.name === data?.district
							)
							?.municipality_list?.find(
								(mun) => mun.name === data?.municipality
							)?.wards!
					}
					disabled={!data?.municipality}
					onValueChange={(ward) =>
						setData((prev) => ({
							...prev,
							ward,
						}))
					}
					value={data?.ward || ""}
				/>
			</div>
			{Object.keys(data || {}).length === 4 && (
				<p className="text-center text-xl font-bold py-12 ">{`${data?.municipality} - ${data?.ward}, ${data?.district}, ${data?.province}, Nepal `}</p>
			)}
		</div>
	);
}
