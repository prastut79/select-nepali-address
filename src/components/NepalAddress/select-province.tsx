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
	data: { id: string; name: string }[];
}

export function SelectProvince({ data, ...props }: SelectProvinceProps) {
	return (
		<div className="space-y-1">
			<Label htmlFor="province">Province</Label>
			<Select {...props}>
				<SelectTrigger className="w-full" id="province">
					<SelectValue placeholder="Select a Province..." />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{data.map(({ id, name }) => (
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
