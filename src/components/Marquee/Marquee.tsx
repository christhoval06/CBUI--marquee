import React from "react";
import {
  MarqueeStyled,
  MarqueeListStyled,
  MarqueeListItemStyled,
  GenericItemStyled,
  GenericItemIconStyled,
  IconStyled,
  MarqueeListProps as IMarqueeListProps,
} from "./styled";

export interface GenericItemProps {
  icon?: React.ReactNode;
  label: string;
}

export function GenericItem({ label, icon }: GenericItemProps) {
  return (
    <GenericItemStyled>
      <GenericItemIconStyled>{icon ?? <IconStyled />}</GenericItemIconStyled>
      {label}
    </GenericItemStyled>
  );
}

interface MarqueeListItemProps {
  children: React.ReactNode | string;
}

function MarqueeListItem({ children }: MarqueeListItemProps) {
  return <MarqueeListItemStyled>{children}</MarqueeListItemStyled>;
}

interface MarqueeListProps<T> extends IMarqueeListProps {
  items: Array<T>;
  renderItem: (item: T) => React.ReactNode;
}

export function MarqueeList<T>({
  duration,
  items,
  renderItem,
}: MarqueeListProps<T>) {
  if (items.length > 12) {
    throw new Error('items must be 12 items');
  }
  return (
    <MarqueeListStyled duration={duration}>
      {items.map((item: T, index: number) => (
        <MarqueeListItem key={`marquee-list--item-${index}`}>
          {renderItem(item)}
        </MarqueeListItem>
      ))}
    </MarqueeListStyled>
  );
}

export interface IMarquee<T> {
  duration: string;
  items: Array<T>;
}
interface MarqueeProps<T> {
  data: Array<IMarquee<T>>;
  renderItem: (item: T) => React.ReactNode;
}
export function Marquee<T>({ data, renderItem }: MarqueeProps<T>) {
  return (
    <MarqueeStyled>
      {data.map(({ duration, items }: IMarquee<T>, index: number) => (
        <MarqueeList
          key={`marquee--list--${index}`}
          duration={duration}
          items={items}
          renderItem={renderItem}
        />
      ))}
    </MarqueeStyled>
  );
}

export default Marquee;
