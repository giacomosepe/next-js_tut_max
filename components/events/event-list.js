import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
	const { items } = props;

	return (
		<ul className={classes.list}>
			{items.map((event) => (
				<EventItem
					key={event.id}
					id={event.id}
					title={event.title}
					location={event.location}
					date={event.date}
					image={event.image}
				/>
			))}
		</ul>
	);
}

export default EventList;

/* const items = [
		{
			id: "uno",
			title: "GHia",
			location: "ch",
			date: "10-12-2022",
		},
	]; */
