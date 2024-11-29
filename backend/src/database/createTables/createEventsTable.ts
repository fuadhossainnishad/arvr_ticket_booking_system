export const createEventTableQuery = `CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    totalSeats INT NOT NULL,
    ticketPrice DECIMAL(10, 2) NOT NULL,
    eventDate DATE NOT NULL,
    coverPhoto VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);
`;
