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

interface SelectMunicipality extends SelectProps {
	data: { id: string; name: string }[];
}
export function SelectMunicipality({ data, ...props }: SelectMunicipality) {
	return (
		<div className="space-y-1">
			<Label htmlFor="municipality">Municipality</Label>
			<Select {...props}>
				<SelectTrigger className="w-full" id="municipality">
					<SelectValue placeholder="Select a Municipality..." />
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
