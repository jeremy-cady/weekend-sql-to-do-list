CREATE TABLE "tasks" (
	--Define columns
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(250),
	"addedBy" VARCHAR(80),
	"completed" BOOLEAN default false,
	"dateAdded" date,
	"deadline" date,
	"completedBy" VARCHAR(80)
);


INSERT INTO "tasks"
	("task", "addedBy", "completed", "dateAdded", "deadline", "completedBy")
VALUES
	('Clean and charge traps', 'Ray Stanz', false, '01-06-2022', '01-09-2022', 'Winston Zedemore'),
	('Ecto-mobile repairs', 'Ray Stanz',  false, '01-06-2022', '01-09-2022', 'Ray Stanz'),
	('Meeting with Dana Barret', 'Peter Venkman', false, '01-06-2022', '01-09-2022', 'Peter Venkman'),
	('Proton pack service', 'Egon Spengler', false, '01-06-2022', '01-09-2022', 'Egon Spengler');
    ('Bust Slimer', 'Jeanine Melnitz', false, '01-06-2022', '01-09-2022', 'Ghostbusters');