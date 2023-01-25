import { FC } from "react";
import { Layout } from "../components/Layout";
import {CpuWidget} from "../widgets/Cpu";
import {WeatherWidget} from "../widgets/Weather";
import {GatherWidget} from "../widgets/Gather";

export const IndexPage: FC = () => {
	return (
		<Layout>
			<div>Index Page</div>
			<GatherWidget/>
			<CpuWidget/>
			<WeatherWidget/>
		</Layout>
	);
};
