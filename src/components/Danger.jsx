import React, { Suspense, lazy } from "react";
import Loader from "../elements/Loader/Loader";
import Default from "../components/Default";

const Zone = lazy(() => import("@elements/Danger/Zone"));

const VSCode = () => {
	return (
		<Default heading="Caine Casket - New Lyfe (Official Video)" programName="YouTube">
			<Suspense fallback={<Loader />}>
				<Zone />
			</Suspense>
		</Default>
	);
};

export default VSCode;
