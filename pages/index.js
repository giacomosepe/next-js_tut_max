import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
	const featuredEvents = getFeaturedEvents();
	return (
		<section>
			<EventList items={featuredEvents} />
		</section>
	);
}

export default HomePage;
