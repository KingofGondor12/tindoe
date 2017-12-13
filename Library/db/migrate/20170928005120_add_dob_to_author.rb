class AddDobToAuthor < ActiveRecord::Migration[5.1]
  def change
    add_column :authors, :dob, :date
  end
end
