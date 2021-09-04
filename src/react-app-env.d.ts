/// <reference types="react-scripts" />

interface IntrinsicProps {
    id?: string;
    className?: string;
}

type MemberProps = Imember & {
    index: number;
}

interface Imember {
    name: string;
    content: string;
    image: string;
    github: string;
}

interface Ilab {
    id: number;
    header: string;
    title: string;
    raw_questions: string[],
    date: string;
    files?: string[]
}

interface IlabUrlParams {
    labId: string;
}

interface NavbarProps {
    theme: "light" | "dark";
}

interface ImemberCard {
    srcImg: string;
    displayName: string;
}

type MemberCardProps = ImemberCard & {
    redirectUrl: string;
}

type LabPreviewProps = Ilab & {
    index: number;
}

interface QuestionPreviewProps {
    index: number;
    questions: string[];
}

interface LabFileProps {
    src: string;
}

interface ITOFItem {
    key?: string;
    targetId: string;
    displayName: string;
    className?: string;
    subSections?: {
        key?: string;
        targetId: string;
        displayName: string;
    }[]
}

type TOFSectionProps = ITOFItem;

interface TOFContentProps {
    sections: Isection[];
}

interface SectionProps {
    id: string;
    title: string;
}

interface DownloadFilesButtonProps {
    files: string[];
    zipSrc: string;
}

interface CodeBlockProps {
    filePath: string;
}

type LabAnswerProps = IntrinsicProps & {
    question: string;
    text?: string[];
}

type GateSectionProps = IntrinsicProps & {
    title: string;
}

interface FigureProps {
    img: string;
    imgClass?: string;
    imgStyle?: { [key: string]: string; }
    title: string;
    figIndex: string;
    src?: string;
}

interface IbibItem {
    srcName: string;
    srcLink?: string;
    srcLinkName?: string;
}

interface Ibiblio {
    title?: string;
    items: IbibItem[];
}

type BiblioProps = Ibiblio;

type BiblioSectionProps = IbiblioSection & IntrinsicProps & {
    key: string;
    subSections?: any;
}

interface Ilab {
    id: number;
    header: string;
    title: string;
    raw_questions: string[];
}

interface LabProps {
    tableOfContent: ITOFItem[];
    biblio: Ibiblio;
    data: Ilab;
}