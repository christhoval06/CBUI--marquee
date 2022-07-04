import {
  Marquee,
  GenericItem,
  GenericItemProps,
  IMarquee,
} from "../../components/Marquee";

const MARQUEE: Array<IMarquee<GenericItemProps>> = [
  {
    duration: "42s",
    items: [
      { label: "Item 1" },
      { label: "Item 2" },
      { label: "Item 3" },
      { label: "Item 4" },
      { label: "Item 5" },
      { label: "Item 6" },
      { label: "Item 7" },
      { label: "Item 8" },
      { label: "Item 9" },
      { label: "Item 10" },
      { label: "Item 11" },
      { label: "Item 12" },
    ],
  },

  {
    duration: "34s",
    items: [
      { label: "Item 1" },
      { label: "Item 2" },
      { label: "Item 3" },
      { label: "Item 4" },
      { label: "Item 5" },
      { label: "Item 6" },
      { label: "Item 7" },
      { label: "Item 8" },
      { label: "Item 9" },
      { label: "Item 10" },
      { label: "Item 11" },
      { label: "Item 12" },
    ],
  },
  {
    duration: "28s",
    items: [
      { label: "Item 1" },
      { label: "Item 2" },
      { label: "Item 3" },
      { label: "Item 4" },
      { label: "Item 5" },
      { label: "Item 6" },
      { label: "Item 7" },
      { label: "Item 8" },
      { label: "Item 9" },
      { label: "Item 10" },
      { label: "Item 11" },
      { label: "Item 12" },
    ],
  },
  {
    duration: "28s",
    items: [
      { label: "Item 1" },
      { label: "Item 2" },
      { label: "Item 3" },
      { label: "Item 4" },
      { label: "Item 5" },
      { label: "Item 6" },
      { label: "Item 7" },
      { label: "Item 8" },
      { label: "Item 9" },
      { label: "Item 10" },
      { label: "Item 11" },
      { label: "Item 12" },
    ],
  },
];
export default () => {
  return (
    <>
      <Marquee
        data={MARQUEE}
        renderItem={({ label }: GenericItemProps) => (
          <GenericItem label={label} />
        )}
      />
    </>
  );
};
