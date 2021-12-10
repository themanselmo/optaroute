# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




puts("Seeding users...")
u1 = User.create(username:"Aristela Marku", password: "1")
u2 = User.create(username:"max", password: "1")

puts("Seeding routes...")
day_value = 0
days_till_weekend=7
days_till_week=2
is_weekend = false
5.times do 
    day_value = day_value + 1
    days_till_weekend = days_till_weekend - 1
    if !is_weekend 
        Route.create(
        starting_point: "Home",
        destination: "Work",
        distance: 20,
        date: "2021-09-#{day_value}",
        user_id: u2.id
        )
        Route.create(
            starting_point: "Work",
            destination: "Gym",
            distance: 5,
            date: "2021-09-#{day_value}",
            user_id: u2.id
        )
        Route.create(
            starting_point: "Gym",
            destination: "Home",
            distance: 15,
            date: "2021-09-#{day_value}",
            user_id: u2.id
        )
    end
    if(is_weekend) 
        days_till_week = days_till_week - 1
        if(days_till_week == 1) 
            is_weekend = false
            days_till_weekend = 7
            days_till_week = 2
        end
        Route.create(
            starting_point: "Home",
            destination: "Park",
            distance: 50,
            date: "2021-09-#{day_value}",
            user_id: u2.id
        )
        Route.create(
            starting_point: "Park",
            destination: "Gym",
            distance: 10,
            date: "2021-09-#{day_value}",
            user_id: u2.id
        )
        Route.create(
            starting_point: "Gym",
            destination: "Chipotle",
            distance: 2,
            date: "2021-09-#{day_value}",
            user_id: u2.id
        )
        Route.create(
            starting_point: "Chipotle",
            destination: "Home",
            distance: 8,
            date: "2021-09-#{day_value}",
            user_id: u2.id
        )
    end
    
end

day_value = 0
days_till_weekend=7

5.times do 
    day_value = day_value + 1
    days_till_weekend = days_till_weekend - 1
    if !is_weekend 
        Route.create(
        starting_point: "Home",
        destination: "Work",
        distance: 20,
        date: "2021-07-#{day_value}",
        user_id: u2.id
        )
        Route.create(
            starting_point: "Work",
            destination: "Gym",
            distance: 5,
            date: "2021-10-#{day_value}",
            user_id: u2.id
        )
        Route.create(
            starting_point: "Gym",
            destination: "Home",
            distance: 15,
            date: Date.new(2021, 10, day_value),
            user_id: u2.id
        )
    end
   
    
end

# r1 = Route.create(
#     starting_point: "21000 W 10 Mile Rd, Southfield, MI 48075, USA",
#     destination: "555 E Lafayette St, Detroit, MI 48226, USA",
#     distance: 40.5,
#     date: Date.new(2021, 12, 6),
#     user_id: u1.id
# )

# r2 = Route.create(
#     starting_point: "Flatiron School Rd, Coram, MI 48075, USA",
#     destination: "3432 Moore Garden, Suite 610, 21758, West Ludiehaven, Maine, United States",
#     distance: 35,
#     date: Date.new(2021, 2, 26),
#     user_id: u1.id
# )

# r3 = Route.create(
#     starting_point: "40248 VonRueden Camp, Apt. 480, 18222-6651, Lake Ronhaven, Nevada, United States",
#     destination: "4579 Wilfrid Stream, Suite 093, 07568, New Nels, New Hampshire, United States",
#     distance: 40.5,
#     date: Date.new(2021, 12, 6),
#     user_id: u2.id
# )

# r4 = Route.create(
#     starting_point: "1713 Stark Inlet, Suite 935, 43693, West Elliston, New York, United States",
#     destination: "555 E Lafayette St, Detroit, MI 48226, USA",
#     distance: 10.5,
#     date: Date.new(2021, 3, 6),
#     user_id: u2.id
# )

# r5 = Route.create(
#     starting_point: "493 Williamson Stream, Apt. 599, 90209, New Emieburgh, Delaware, United States",
#     destination: "26811 Frederik Mission, Apt. 861, 71209, Johnstown, Arizona, United States",
#     distance: 35,
#     date: Date.new(2021, 3, 6),
#     user_id: u2.id
# )


