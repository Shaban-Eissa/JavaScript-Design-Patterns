function createUserRole(role) {
  switch (role) {
    case "admin":
      return { role, canDelete: true, canEdit: true };
    case "editor":
      return { role, canDelete: false, canEdit: true };
    case "viewer":
      return { role, canDelete: false, canEdit: false };
  }
}

const admin = createUserRole("admin");
const editor = createUserRole("editor");
const viewer = createUserRole("viewer");

console.log(admin); // { role: 'admin', canDelete: true, canEdit: true }
console.log(editor); // { role: 'editor', canDelete: false, canEdit: true }
console.log(viewer); // { role: 'viewer', canDelete: false, canEdit: false }
