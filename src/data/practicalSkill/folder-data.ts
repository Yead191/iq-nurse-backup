export interface Folder {
  id: string;
  name: string;
  createdAt: Date;
  skillIds: string[];
}

export interface SavedSkill {
  skillId: string;
  folderId: string;
  savedAt: Date;
}

// Initialize from localStorage or use defaults
const getInitialFolders = (): Folder[] => {
  if (typeof window === "undefined") return [];

  const saved = localStorage.getItem("nursingSkillsFolders");
  if (saved) {
    const folders = JSON.parse(saved);
    // Convert date strings back to Date objects
    return folders.map((folder: any) => ({
      ...folder,
      createdAt: new Date(folder.createdAt),
    }));
  }

  return [
    {
      id: "favorites",
      name: "Favorites",
      createdAt: new Date(),
      skillIds: [],
    },
  ];
};

export const saveFoldersToStorage = (folders: Folder[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("nursingSkillsFolders", JSON.stringify(folders));
  }
};

export const loadFoldersFromStorage = (): Folder[] => {
  return getInitialFolders();
};

export const createFolder = (name: string, folders: Folder[]): Folder[] => {
  const newFolder: Folder = {
    id: `folder-${Date.now()}`,
    name,
    createdAt: new Date(),
    skillIds: [],
  };

  const updatedFolders = [...folders, newFolder];
  saveFoldersToStorage(updatedFolders);
  return updatedFolders;
};

export const saveSkillToFolder = (
  skillId: string,
  folderId: string,
  folders: Folder[],
): Folder[] => {
  const updatedFolders = folders.map((folder) => {
    if (folder.id === folderId) {
      // Check if skill is already in folder
      if (!folder.skillIds.includes(skillId)) {
        return {
          ...folder,
          skillIds: [...folder.skillIds, skillId],
        };
      }
    }
    return folder;
  });

  saveFoldersToStorage(updatedFolders);
  return updatedFolders;
};

export const removeSkillFromFolder = (
  skillId: string,
  folderId: string,
  folders: Folder[],
): Folder[] => {
  const updatedFolders = folders.map((folder) => {
    if (folder.id === folderId) {
      return {
        ...folder,
        skillIds: folder.skillIds.filter((id) => id !== skillId),
      };
    }
    return folder;
  });

  saveFoldersToStorage(updatedFolders);
  return updatedFolders;
};

export const deleteFolder = (folderId: string, folders: Folder[]): Folder[] => {
  // Don't allow deleting the default "Favorites" folder
  if (folderId === "favorites") return folders;

  const updatedFolders = folders.filter((folder) => folder.id !== folderId);
  saveFoldersToStorage(updatedFolders);
  return updatedFolders;
};

export const isSkillInFolder = (
  skillId: string,
  folderId: string,
  folders: Folder[],
): boolean => {
  const folder = folders.find((f) => f.id === folderId);
  return folder ? folder.skillIds.includes(skillId) : false;
};
