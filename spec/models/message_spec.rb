require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context 'can save' do
      it 'is valid with boy' do
        expect(build(:message, image: "")).to be_valid
      end

      it 'is valid with image' do
        expect(build(:message, boy: "")).to be_valid
      end

      it 'is valid with boy and image' do
        expect(build(:message)).to be_valid
      end
    end

    context 'can not save' do
      it 'is invalid without content and image' do
        message = build(:message, boy: nil, image: nil)
        message.valid?
        expect(message.errors[:boy]).to include("を入力してください")
      end

      it 'is invalid without group_id' do
        message = build(:message, group_id:"")
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it 'is invalid without user_id' do
        message = build(:message, user_id:"")
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end
