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
interface SelectDistrict extends SelectProps {
	data?: { id: string; name: string }[];
}
export function SelectDistrict({ data, ...props }: SelectDistrict) {
	return (
		<div className="space-y-1">
			<Label htmlFor="district">District</Label>
			<Select {...props}>
				<SelectTrigger className="w-full" id="district">
					<SelectValue placeholder="Select a District..." />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{data?.map(({ id, name }) => (
							<SelectItem key={id} value={name}>
								{name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
