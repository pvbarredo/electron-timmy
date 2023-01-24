import { FC } from "react";
import { Layout } from "../components/Layout";
import {CpuWidget} from "../widgets/Cpu";

export const IndexPage: FC = () => {
	return (
		<Layout>
			<div>Hello main (new update!)</div>
			<CpuWidget/>
		</Layout>
	);
};
