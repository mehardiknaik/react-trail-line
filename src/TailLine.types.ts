export interface TailLineProps {
  items: TailLineItem[];
  Content: (item: TailLineItem) => JSX.Element;
  horizantal?: boolean;
  duration?: number;
}
type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export interface TailLineItem {
  status: "complete" | "inprogress" | "todo" | "reject";
  becon?: boolean;
  completed?: Range<0, 101>;
  [key: string]: string | number | boolean | undefined;
}
