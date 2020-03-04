/**
 * List of items, with optional complete decoration for Todos
 */
import React from 'react';
import { Goal, Todo } from '../types';

interface ListProps {
	items: Array<Goal | Todo>;
	remove: (item: Goal | Todo) => void;
	toggle?: (id: string) => void;
}

const List: React.FC<ListProps> = (props: ListProps) => {
	return (
		<ul>
			{props.items.map((item) => (
				<li key={item.id}>
					<span
						onClick={(): void =>
							props.toggle && props.toggle(item.id)
						}
						style={{
							textDecoration:
								'complete' in item && item.complete
									? 'line-through'
									: 'none',
						}}
					>
						{item.name}
					</span>
					<button onClick={(): void => props.remove(item)}>X</button>
				</li>
			))}
		</ul>
	);
};

export default List;
