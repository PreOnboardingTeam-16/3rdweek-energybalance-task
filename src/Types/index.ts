export interface JsonDataType {
  similarity: number;
  brand: string;
  id: number;
  ingredient: string;
  price: number;
  productName: string;
  salesAmount: number;
  searchAmount: number;
  url: string;
}

export type Onclickhandler = (
  setSearchInput: React.Dispatch<React.SetStateAction<string>>,
  inputState: string
) => void;
export type onClickRecommendhandler = (
  setSearchInput: React.Dispatch<React.SetStateAction<string>>,
  inputState: string,
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
  selectedCategory: string
) => void;

export type MouseEventType = React.MouseEvent<HTMLElement, MouseEvent>;

export interface CategoryTabProps {
  onMouseDown: (e: MouseEventType) => void;
  onMouseUp: () => void;
  onMouseMove: (e: MouseEventType) => void;
  onMouseLeave: () => void;
  ref: any;
}
