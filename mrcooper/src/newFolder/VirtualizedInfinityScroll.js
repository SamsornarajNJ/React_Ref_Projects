import React, { useEffect, useState, useCallback } from "react";
import { FixedSizeList as List } from "react-window";

const ITEM_HEIGHT = 50;
const LOAD_MORE_THRESHOLD = 10;

// Simulate API call
const fetchData = (startIndex, limit = 20) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newData = Array.from({ length: limit }, (_, i) => `Item ${startIndex + i}`);
      resolve(newData);
    }, 500);
  });
};

export default function VirtualizedInfinityScroll() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch initial data
  useEffect(() => {
    loadMore(); // Load initial 20 items
  }, []);

  // Fetch more data when user scrolls near bottom
  const loadMore = useCallback(async () => {
    setIsLoading(true);
    const newItems = await fetchData(items.length); // fetchData(startIndex = currentLength)
    setItems((prev) => [...prev, ...newItems]);
    setIsLoading(false);
  }, [items]);

  // Monitor scrolling to the bottom
  const handleScroll = ({ visibleStopIndex }) => {
    if (visibleStopIndex >= items.length - LOAD_MORE_THRESHOLD && !isLoading) {
      loadMore();
    }
  };

  // Render each row
  const Row = ({ index, style }) => (
    <div style={style} className="row">
      {items[index] || "Loading..."}
    </div>
  );

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={ITEM_HEIGHT}
      width={"100%"}
      onItemsRendered={({ visibleStopIndex }) =>
        handleScroll({ visibleStopIndex })
      }
    >
      {Row}
    </List>
  );
}
