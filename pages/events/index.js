import Link from "next/link";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";

const eventsPage = (props) => {
	return (
		<section>
			<h1>this is the list of events:</h1>
			<h3>
				please click to select the event you want or filter to have a shortlist
			</h3>
			<div>
				<ul>
					<h4>test</h4>
				</ul>
				<br />
				<Link href='/'>
					<button>Back home</button>
				</Link>
			</div>
		</section>
	);
};

export default eventsPage;
