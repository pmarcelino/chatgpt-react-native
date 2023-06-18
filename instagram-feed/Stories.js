import React from "react";
import Story from "./Story";
import { FlatList } from "react-native";

export default function Stories({ stories, profile }) {
  function renderItem({ item, index }) {
    if (index === 0) {
      return (
        <>
          <Story
            name="Pedro Marcelino"
            avatar={item.avatar}
            isCreateStory={true}
          />
          <Story name={item.name} avatar={item.avatar} isSeen={item.isSeen} />
        </>
      );
    } else {
      return (
        <Story name={item.name} avatar={item.avatar} isSeen={item.isSeen} />
      );
    }
  }

  return (
    <FlatList
      data={stories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
    />
  );
}
