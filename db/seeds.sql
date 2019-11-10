-- Put all songs titles in songs table

insert into songs (title, table_name)
    values ("Prelude", "prelude"), ("Old Habits are Hard to Break", "old_habits"), ("Funky", "funky"), 
        ("Ms. Guidance", "ms_guidance"), ("Spoons", "spoons"), ("Circus", "circus"), 
        ("Don't Belong", "dont_belong"), ("Censor", "censor"), ("Title Revelation", "title_revelation"), 
        ("Anesthesia", "anesthesia"), ("No Worries", "no_worries"), ("Parasite", "parasite");

-- Insert all tasks for each song

insert into prelude (task, completed)
    values ("Re-record guitars", 'no'),
        ("Finish lyrics", "no"),
        ("Record Vocals", "no"),
        ("Mix full song", "no");

insert into old_habits (task, completed)
    values ("Re-record guitars", "no"),
        ("Re-record vocals", "no"),
        ("Re-arrange breakdown vocals", "no"),
        ("Add sound effects", "no");

insert into funky (task, completed)
    values ("Finish writing drums", "no"),
        ("Record drums", "no"),
        ("Give song official name", "no"),
        ("Finish writing guitars & bass", "no"),
        ("Write lyrics & vocal arrangements", "no"),
        ("Record guitars & bass", "no"),
        ("Record vocals", "no"),
        ("Add sound effects", "no"),
        ("Mix full song", "no");

insert into ms_guidance (task, completed)
    values ("Record vocals", "no"),
        ("Record guitars & bass", "yes"),
        ("Write lyrics", "yes"),
        ("Add sound effects", "no"),
        ("Mix full song", "no");

insert into spoons (task, completed)
    values ("Re-write lyrics", "no"),
        ("Record guitars & bass", "no"),
        ("Record drums", "yes"),
        ("Record vocals", "no"),
        ("Add sound effects", "no"),
        ("Mix full song", "no");

insert into circus (task, completed)
    values ("Re-write lyrics", "no"),
        ("Record guitars & bass", "yes"),
        ("Record drums", "yes"),
        ("Record vocals", "no"),
        ("Add sound effects", "yes"),
        ("Mix full song", "no");

insert into dont_belong (task, completed)
    values ("Write drums", "yes"),
        ("Write guitars & bass", "yes"),
        ("Re-write intro", "no"),
        ("Write lyrics", "yes"),
        ("Record vocals", "no"),
        ("Add sound effects", "no"),
        ("Mix Full song", "no");

insert into censor (task, completed)
    values ("Re-arrange entire song", "no"),
        ("Re-write title", "no"),
        ("Write guitars & bass", "yes"),
        ("Write drums", "yes"),
        ("Re-write all lyrics", "no"),
        ("Decide instrumentation by section, esp. for acoustic guitar?", "no")
        ("Record drums", "no"),
        ("Record guitars & bass", "no"),
        ("Record vocals", "no"),
        ("Add sound effects", "no"),
        ("Mix full song", "no");

insert into title_revelation (task, completed)
    values ("Re-write lyrics", "yes"),
        ("Write guitars & bass", "yes"),
        ("Write drums", "yes"),
        ("Record guitars & bass", "yes"),
        ("Record drums", "yes"),
        ("Decide on instrumentation, esp. for acoustic guitars?", "no"),
        ("Record vocals", "no"),
        ("Add sound effects", "no"),
        ("Mix full song", "no");

insert into anesthesia (task, completed) 
    values ("Write guitars & bass", "no"),
        ("Write drums", "no"),
        ("Write lyrics & vocal arrangements", "no"),
        ("Record drums", "no"),
        ("Record guitars & bass", "no"),
        ("Record vocals", "no"),
        ("Add sound effects", "no"),
        ("Mix full song", "no");

insert into no_worries (task, completed) 
    values ("Write guitars & bass", "yes"),
        ("Write drums", "yes"),
        ("Write lyrics & vocal arrangements", "yes"),
        ("Record drums", "yes"),
        ("Record guitars & bass", "no"),
        ("Record vocals", "no"),
        ("Add sound effects", "no"),
        ("Mix full song", "no");

insert into parasite (task, completed) 
    values ("Write guitars & bass", "no"),
        ("Write drums", "no"),
        ("Write lyrics & vocal arrangements", "no"),
        ("Record drums", "no"),
        ("Record guitars & bass", "no"),
        ("Record vocals", "no"),
        ("Add sound effects", "no"),
        ("Mix full song", "no");