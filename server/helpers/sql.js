const sql = {};

const admin = "INSERT INTO users(firstname, lastname, email, password, isadmin, registered) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (email) DO NOTHING";
const registerUser = "INSERT INTO users(firstname, lastname, email, password, registered) VALUES ($1, $2, $3, $4, $5) RETURNING * ";
const retrieveAllUsers = "SELECT * FROM users";
const loginUser = "SELECT * FROM users WHERE email = $1";
const retrieveSpecificUser = "SELECT * FROM users WHERE id = $1";
const deleteSpecificUser = "DELETE FROM users WHERE id = $1";
const sendEmail = "INSERT INTO messages(subject, message, parentmessageid, senderid, receiverid, status, createdon) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
const retrieveAllEmails = "SELECT * FROM messages";
const retrieveSpecificEmail = "SELECT * FROM messages WHERE id = $1";
const deleteSpecificEmail = "DELETE FROM messages WHERE id = $1";
const retrieveSentEmails = "SELECT * FROM messages WHERE status = $1 AND senderid = $2";
const retrieveReadEmails = "SELECT * FROM messages WHERE status = $1 AND receiverid = $2";
const retrieveUnreadEmails = "SELECT * FROM messages WHERE status = $1 AND receiverid = $2";
const retrieveDraftEmails = "SELECT * FROM messages WHERE status = $1 AND (receiverid = $2 OR senderid = $2)";
const findUser = "SELECT * FROM users WHERE firstname = $1 AND lastname = $2";
const findUserEmail = "SELECT * FROM users WHERE email = $1";
const retrieveAdmin = "SELECT * FROM users WHERE id = $1 AND isadmin = $2";
const retrieveUserSpecificEmail = "SELECT * FROM messages WHERE id = $1 AND (receiverid = $2 OR senderid = $2)";
const adminGetSentEmails = "SELECT * FROM messages WHERE status = $1";
const adminGetReadEmails = "SELECT * FROM messages WHERE status = $1";
const adminGetUnreadEmails = "SELECT * FROM messages WHERE status = $1";
const adminGetDraftEmails = "SELECT * FROM messages WHERE status = $1";
const createGroup = "INSERT INTO groups(name, role, owner) VALUES($1, $2, $3) RETURNING *";
const retrieveAllGroups = "SELECT * FROM groups";
const retrieveSpecificGroup = "SELECT * FROM groups WHERE id = $1";
const updateSpecificGroup = "UPDATE groups SET name = $1 WHERE id = $2 RETURNING *";
const deleteSpecificGroup = "DELETE FROM groups WHERE id = $1";
const registerGroupMember = "INSERT INTO groupmembers(firstname, lastname, role, groupid) VALUES ($1, $2, $3, $4) RETURNING * ";
const retrieveSpecificGroupOwner = "SELECT * FROM groups WHERE id = $1 AND owner = $2";
const retrieveSpecificGroupMember = "SELECT * FROM groupmembers WHERE id = $1 AND groupid = $2";
const deleteSpecificGroupMember = "DELETE FROM groupmembers WHERE id = $1 AND groupid = $2";
const sendGroupEmail = "INSERT INTO groupmessages(subject, message, parentmessageid, status, createdon, groupid) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
const deleteSpecificUserPassword = "UPDATE users SET password = null WHERE email = $1 ";
const retrieveUserGroups = "SELECT * FROM groups WHERE owner = $1";
const retrieveUserGroup = "SELECT * FROM groups WHERE id = $1 AND owner = $2";
const retrieveSpecificGroupMembers = "SELECT * FROM groupmembers WHERE groupid = $1";
const retrieveSpecificGroupEmails = "SELECT * FROM groupmessages WHERE groupid = $1";
const retrievePassResetUsers = "SELECT * FROM users WHERE password isNull";
const retrieveMember = "SELECT * FROM groupmembers WHERE firstname = $1 AND lastname = $2";
const findGroup = "SELECT * FROM groups WHERE name = $1";
const retrieveSpecificUserEmails = "SELECT * FROM messages WHERE senderid = $1 OR receiverid = $1";


sql.admin = admin;
sql.registerUser = registerUser;
sql.loginUser = loginUser;
sql.retrieveAllUsers = retrieveAllUsers;
sql.retrieveSpecificUser = retrieveSpecificUser;
sql.deleteSpecificUser = deleteSpecificUser;
sql.sendEmail = sendEmail;
sql.retrieveAllEmails = retrieveAllEmails;
sql.retrieveSpecificEmail = retrieveSpecificEmail;
sql.deleteSpecificEmail = deleteSpecificEmail;
sql.retrieveSentEmails = retrieveSentEmails;
sql.retrieveReadEmails = retrieveReadEmails;
sql.retrieveUnreadEmails = retrieveUnreadEmails;
sql.retrieveDraftEmails = retrieveDraftEmails;
sql.findUser = findUser;
sql.findUserEmail = findUserEmail;
sql.retrieveAdmin = retrieveAdmin;
sql.retrieveUserSpecificEmail = retrieveUserSpecificEmail;
sql.adminGetSentEmails = adminGetSentEmails;
sql.adminGetReadEmails = adminGetReadEmails;
sql.adminGetUnreadEmails = adminGetUnreadEmails;
sql.adminGetDraftEmails = adminGetDraftEmails;
sql.createGroup = createGroup;
sql.retrieveAllGroups = retrieveAllGroups;
sql.retrieveSpecificGroup = retrieveSpecificGroup;
sql.updateSpecificGroup = updateSpecificGroup;
sql.deleteSpecificGroup = deleteSpecificGroup;
sql.registerGroupMember = registerGroupMember;
sql.retrieveSpecificGroupOwner = retrieveSpecificGroupOwner;
sql.retrieveSpecificGroupMember = retrieveSpecificGroupMember;
sql.deleteSpecificGroupMember = deleteSpecificGroupMember;
sql.sendGroupEmail = sendGroupEmail;
sql.deleteSpecificUserPassword = deleteSpecificUserPassword;
sql.retrieveUserGroups = retrieveUserGroups;
sql.retrieveUserGroup = retrieveUserGroup;
sql.retrieveSpecificGroupMembers = retrieveSpecificGroupMembers;
sql.retrieveSpecificGroupEmails = retrieveSpecificGroupEmails;
sql.retrievePassResetUsers = retrievePassResetUsers;
sql.retrieveMember = retrieveMember;
sql.findGroup = findGroup;
sql.retrieveSpecificUserEmails = retrieveSpecificUserEmails;

export default sql;