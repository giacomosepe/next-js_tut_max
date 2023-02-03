import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";

const EventDetailPage = () => {
	const router = useRouter();
	const eventID = router.query.eventid;

	const event = getEventById(eventID);

	if (!event) {
		return (
			<div>
				<h1>there is no event with that name</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>{event.title}</h1>
			<p>{event.description}</p>
			<img src={"/" + event.image}></img>
		</div>
	);
};
export default EventDetailPage;
