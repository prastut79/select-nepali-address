import * as React from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Label } from "../ui/label";
import { SelectProps } from "@radix-ui/react-select";

interface SelectProvinceProps extends SelectProps {
	wards: number;
}

export function SelectWard({ wards, ...props }: SelectProvinceProps) {
	return (
		<div className="space-y-1">
			<Label htmlFor="ward">Ward No</Label>
			<Select {...props}>
				<SelectTrigger className="w-full" id="ward">
					<SelectValue placeholder="Select a Ward..." />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{new Array(wards).fill(0).map((_, k) => (
							<SelectItem key={k} value={`${k + 1}`}>
								{k + 1}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
