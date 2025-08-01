import { FileIcon, Folder as FolderIcon } from "lucide-react";

import type { File, Folder } from "~/lib/mock-data";

export function FileRow(props: { file: File }) {
  const { file } = props;
  return (
    <li
      key={file.id}
      className="hover:bg-gray-750 border-b border-gray-700 px-6 py-4"
    >
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-6 flex items-center">
          <a
            href={file.url}
            className="flex items-center text-gray-100 hover:text-blue-400"
            target="_blank"
          >
            <FileIcon className="mr-3" size={20} />
            {file.name}
          </a>
        </div>
        <div className="col-span-3 text-gray-400">{"file"}</div>
        <div className="col-span-3 text-gray-400">{file.size}</div>
      </div>
    </li>
  );
}

export function FolderRow(props: {
  folder: Folder;
  handleFolderClick: () => void;
}) {
  const { folder, handleFolderClick } = props;
  return (
    <li
      key={folder.id}
      className="hover:bg-gray-750 border-b border-gray-700 px-6 py-4"
    >
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-6 flex items-center">
          {folder.type === "folder" ? (
            <button
              onClick={() => handleFolderClick()}
              className="flex items-center text-gray-100 hover:text-blue-400"
            >
              <FolderIcon className="mr-3" size={20} />
              {folder.name}
            </button>
          ) : (
            <a
              href={folder.url}
              className="flex items-center text-gray-100 hover:text-blue-400"
            >
              <FileIcon className="mr-3" size={20} />
              {folder.name}
            </a>
          )}
        </div>
        <div className="col-span-3 text-gray-400">
          {folder.type === "folder" ? "Folder" : "File"}
        </div>
        <div className="col-span-3 text-gray-400">
          {folder.type === "folder" ? "--" : "2 MB"}
        </div>
      </div>
    </li>
  );
}
